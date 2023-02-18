import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedLayout = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value:
                            'green',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: false,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ddd",
                    },
                    links: {
                        color: "red",
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 5, max: 7 },
                    },
                },
                fullScreen: {
                    enable: false
                },
            }}
        />
    );
};

export default AnimatedLayout;