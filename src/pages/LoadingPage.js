import dipperRunning from '../assets/img/dipper_running.gif';
import "../styles/LoadingPage.scss"

function LoadingPage() {
    return (
        <div className="ladingPage">
            <img src={dipperRunning} alt="dipper Runnung " />
        </div>
    );
}

export default LoadingPage