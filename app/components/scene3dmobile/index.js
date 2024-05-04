import { useEffect, useRef, useState } from 'react';
import './style.scss';

export default function Index(props) {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            setIsLoaded(true);
            video.playbackRate = 0.7; // Setează viteza de redare la 50% din viteza normală
            video.play().catch((error) => {
                console.error('Error playing video:', error);
                setIsError(true);
            });
        };

        const handleError = () => {
            setIsError(true);
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('error', handleError);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('error', handleError);
        };
    }, []);

    return (
        <div className="video-container">
            {!isError && (
                <video
                    ref={videoRef}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{
                        width: '105%',
                        maxWidth: '105%',
                        position: 'inherit',
                        left: '-30px',
                        height: '73%',
                        objectFit: 'cover',
                        display: isLoaded ? 'block' : 'none', // Asigură că videoclipul este afișat doar când este complet încărcat
                    }}
                >
                    <source src="web.webm" type="video/webm" />
                </video>
            )}
            {(isError || !isLoaded) && (
                <img
                    src="web.webp"
                    alt="Backup"
                    style={{
                        width: '105%',
                        maxWidth: '105%',
                        position: 'inherit',
                        left: '-30px',
                        height: '73%',
                        objectFit: 'cover',
                    }}
                />
            )}
        </div>
    );
}
