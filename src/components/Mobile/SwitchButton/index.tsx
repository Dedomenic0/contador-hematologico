import { useState } from "react";

interface SwitchButtonProps {
    onChecked: (bool: boolean) => void
}

const SwitchButton = ({ onChecked } : SwitchButtonProps) => {
    const [isChecked, setIsCheckd] = useState(false);
    const [imageSrc, setImageSrc] = useState("/mobile/off-button.png");

    return (
        <div className="text-center">
            <p>Decrementar</p>
            <input
                className="hidden"
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={(e) => {
                    setIsCheckd(e.target.checked);
                    setImageSrc(isChecked ? "/mobile/on-button.png" : "/mobile/off-button.png")
                    onChecked(isChecked)
                }}
            />
            <label htmlFor="checkbox">
                <img src={imageSrc} alt="botão switch on/off" />
            </label>
        </div>
    )
}

export default SwitchButton;