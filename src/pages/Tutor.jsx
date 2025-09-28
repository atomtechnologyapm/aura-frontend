import Sidebar from "../components/Sidebar";

export default function Tutor() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "linear-gradient(140deg,  rgba(11, 20, 38, 1) 65%, rgba(75, 0, 130, 0.94) 99%)",
                    height: "100vh",
                    color: "white"
                }}
            >
                <Sidebar/>
            </div>
        </>
    );
}
