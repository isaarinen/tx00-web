function BoxColor(props) {
    const clamp = (n) => {
        const v = Number(n);
        if (Number.isNaN(v)) return 0;
        return Math.max(0, Math.min(255, v));
    };

    const r = clamp(props.r);
    const g = clamp(props.g);
    const b = clamp(props.b);

    const toHex = (n) => n.toString(16).padStart(2, "0");
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    const textColor = luminance > 186 ? "#000" : "#fff";

    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: textColor,
        padding: "20px",
        borderRadius: "6px",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box"
    };

    return (
        <div className="boxcolor" style={style}>
            <div>{`rgb(${r}, ${g}, ${b})`}</div>
            <div>{hex}</div>
        </div>
    );
}
export default BoxColor;