import * as React from 'react';
import MediaQuery from 'react-responsive';

import * as classNames from 'classnames';
import memoizeOne from 'memoize-one';
import { reduceGamesToStats } from 'src/models/stats';
import { Game, GinMatch, isGame } from '../../models';
import { Drawer, DrawerTitleSpacer } from '../Drawer/Drawer';
import { Form } from '../Form';
import { GameInput, GameInputProps, PartialGame } from '../GameInput';
import { ScoreColumn } from '../ScoreColumn';
import { ScrollViewer } from '../ScrollViewer';
import { SetView } from '../SetView';
import { StatsViewer } from '../StatsViewer';
import { focusRef } from '../util/Ref';
import { MatchResultViewer } from './MatchResultViewer';
import './MatchViewer.css';

export interface MatchViewerProps {
    value: GinMatch;
    readOnly?: boolean;
    onSubmitGame?(game: Game): void;
    onNewMatch?(): void;
}

const INITIAL_STATE = {
    drawerOpen: false,
};

type State = typeof INITIAL_STATE;

export class MatchViewer extends React.Component<MatchViewerProps, State> {
    private readonly gameForm = React.createRef<GameForm>();

    /**
     * A memoized stats calculator. This keeps the component interface correct -
     * the component takes a GinMatch - while avoiding unnecessary recalculation
     * when the match hasn't changed. The memoization is done per-instance so
     * that multiple MatchViewers will never cause thrashing on every render.
     */
    private readonly computeStats = memoizeOne(reduceGamesToStats);

    constructor(props: MatchViewerProps) {
        super(props);

        this.state = INITIAL_STATE;
    }

    public render(): React.ReactNode {
        const {
            value: { player1Name, player2Name, ...value },
            readOnly,
            ...props
        } = this.props;
        const players = { player1Name, player2Name };

        const gameForm = (
            <GameForm
                ref={this.gameForm}
                {...players}
                onSubmitGame={this.handleGameSubmit}
            />
        );

        return (
            <div
                className={classNames('c-match-viewer', {
                    'c-match-viewer--finished': Boolean(value.finalResult),
                })}
            >
                <MediaQuery minWidth={600}>
                    <ScrollViewer className="c-match-viewer__main">
                        <div className="c-match-viewer__sets">
                            {value.sets.map((s, i) => (
                                <ScoreColumn key={i} {...players} value={s} />
                            ))}
                        </div>
                        <StatsViewer
                            value={this.computeStats(value.games)}
                            {...players}
                        />
                    </ScrollViewer>
                </MediaQuery>
                <MediaQuery maxWidth={600}>
                    <ScrollViewer overflowX="hidden">
                        {value.sets.map((v, i) => (
                            <SetView key={i} value={v} {...players} />
                        ))}
                        <StatsViewer
                            value={this.computeStats(value.games)}
                            {...players}
                        />
                    </ScrollViewer>
                </MediaQuery>
                {value.finalResult && (
                    <MatchResultViewer
                        {...players}
                        {...value.finalResult}
                        onNewMatch={props.onNewMatch}
                    />
                )}
                {!readOnly && (
                    <>
                        <MediaQuery maxWidth={1000}>
                            <DrawerTitleSpacer />
                            <Drawer
                                open={this.state.drawerOpen}
                                title="Add game"
                                onTitleClick={this.handleGameFormOpen}
                                onDismiss={this.closeGameForm}
                                hideTitle={!!value.finalResult}
                            >
                                {gameForm}
                            </Drawer>
                        </MediaQuery>
                        <MediaQuery minWidth={1000}>
                            <div className="c-match-viewer__add-game">
                                <h1>Add game</h1>
                                {gameForm}
                            </div>
                        </MediaQuery>
                    </>
                )}
            </div>
        );
    }

    private readonly handleGameSubmit: MatchViewerProps['onSubmitGame'] = game => {
        if (this.props.onSubmitGame) this.props.onSubmitGame(game);
        this.closeGameForm();
    };

    private readonly closeGameForm = () => {
        this.setState({ drawerOpen: false });
    };

    private readonly handleGameFormOpen = () => {
        this.setState({ drawerOpen: true });
        focusRef(this.gameForm);
    };
}

type GameFormProps = Pick<MatchViewerProps, 'onSubmitGame'> &
    Pick<GameInputProps, 'player1Name' | 'player2Name' | 'disabled'>;

class GameForm extends React.Component<GameFormProps, PartialGame> {
    private readonly input = React.createRef<GameInput>();

    constructor(props: GameFormProps) {
        super(props);
        this.state = PartialGame.DEFAULT;
    }

    public render() {
        return (
            <Form
                className="c-gameform"
                onSubmit={this.handleSubmit}
                disableSubmit={this.props.disabled || !isGame(this.state)}
                submitLabel="Submit"
            >
                <GameInput
                    ref={this.input}
                    player1Name={this.props.player1Name}
                    player2Name={this.props.player2Name}
                    disabled={this.props.disabled}
                    value={this.state}
                    onChange={this.handleChange}
                />
            </Form>
        );
    }

    public readonly focus = () => focusRef(this.input);

    private readonly handleChange = (value: PartialGame) => {
        this.setState(value);
    };

    private readonly handleSubmit = () => {
        // Don't allow submission of incomplete games
        // TODO show an error in this case
        if (!isGame(this.state)) return;

        if (this.props.onSubmitGame) this.props.onSubmitGame(this.state);

        // Wipe the state, so we're ready for the next game input.
        this.setState(PartialGame.DEFAULT);

        this.focus();
    };
}
