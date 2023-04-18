import MyTime from "./MyTime";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { RootStatesType } from "../redux/AppStore";

type Props = {
    currentTime: Date;
    changeTime: () => void;
};

const Home = ({ currentTime, changeTime }: Props) => {
    return (
        <div className="card card-body">
            <h2>Home</h2>
            <MyTime currentTime={currentTime} changeTime={changeTime} />
        </div>
    );
};

const mapStateToProps = (state: RootStatesType) => ({
    currentTime: state.home.currentTime
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    changeTime: () => dispatch(TimeActionCreator.changeTime())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);