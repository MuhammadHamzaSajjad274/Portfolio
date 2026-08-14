import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;

function OgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#08070a",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(224,169,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(224,169,94,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Aurora blobs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224,169,94,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 80,
          right: -60,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224,169,94,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: 300,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224,169,94,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Left accent border */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 4,
          height: "100%",
          background: "linear-gradient(180deg, #e0a95e 0%, #a97b3c 100%)",
        }}
      />

      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 80,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              color: "#e0a95e",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.18em",
            }}
          >
            PORTFOLIO
          </span>
          <div
            style={{ width: 40, height: 1, backgroundColor: "#e0a95e" }}
          />
        </div>

        <div
          style={{
            marginTop: 36,
            color: "#f4f0e9",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Muhammad Hamza
        </div>
        <div
          style={{
            color: "#f4f0e9",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Sajjad
        </div>

        <div
          style={{
            marginTop: 24,
            color: "#e0a95e",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          AI/ML Engineer · LLM Developer
        </div>

        <div
          style={{
            marginTop: 12,
            color: "#8f8779",
            fontSize: 17,
            fontWeight: 400,
          }}
        >
          Building intelligent systems with PyTorch, LangGraph & FastAPI
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
          {["Machine Learning", "LLM Applications", "Multi-Agent Systems"].map(
            (pill) => (
              <div
                key={pill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  borderRadius: 999,
                  backgroundColor: "rgba(224,169,94,0.08)",
                  border: "1px solid rgba(224,169,94,0.28)",
                  color: "#b8afa1",
                  fontSize: 13,
                }}
              >
                {pill}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Right card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 280,
            height: 340,
            borderRadius: 24,
            backgroundColor: "rgba(24,22,28,0.55)",
            border: "1px solid rgba(224,169,94,0.14)",
            padding: "32px 24px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "rgba(224,169,94,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e0a95e",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            HS
          </div>

          <div
            style={{
              marginTop: 20,
              color: "#8f8779",
              fontSize: 13,
            }}
          >
            Available for
          </div>
          <div
            style={{
              marginTop: 4,
              color: "#f4f0e9",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            AI/ML Roles
          </div>

          <div
            style={{
              marginTop: 16,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#7fc7c4",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 20,
              width: "100%",
            }}
          >
            {[
              ["3+", "Internships"],
              ["4", "Projects"],
              ["25+", "Technologies"],
            ].map(([num, label]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{ color: "#e0a95e", fontSize: 24, fontWeight: 700 }}
                >
                  {num}
                </span>
                <span style={{ color: "#8f8779", fontSize: 12 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom URL */}
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 28,
          color: "#8f8779",
          fontSize: 14,
        }}
      >
        hamzasajjad.vercel.app
      </div>
    </div>
  );
}

export async function GET() {
  const imageResponse = new ImageResponse(<OgImage />, {
    width: WIDTH,
    height: HEIGHT,
  });

  const buffer = Buffer.from(await imageResponse.arrayBuffer());

  try {
    const outPath = path.join(process.cwd(), "public", "hamzaa.png");
    fs.writeFileSync(outPath, buffer);
  } catch {
    // Static write may fail on read-only production filesystems.
  }

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
