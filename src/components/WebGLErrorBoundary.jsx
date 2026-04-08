import React from "react";

class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Error caught:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 30% 40%, rgba(145,94,255,0.15) 0%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 70% 70%, rgba(0,191,255,0.1) 0%, transparent 50%)",
            }}
          />
          <div style={{ textAlign: "center", zIndex: 1, padding: "20px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌐</div>
            <p
              style={{
                color: "#aaa",
                fontSize: "14px",
                margin: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {this.props.fallbackText || "3D content unavailable"}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default WebGLErrorBoundary;
