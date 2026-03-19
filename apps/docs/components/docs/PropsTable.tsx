import type { PropDefinition } from "@harish-ui/core";

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div style={{ overflowX: "auto", marginTop: 24 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  borderBottom: "2px solid var(--ui-border)",
                  fontWeight: 600,
                  color: "var(--ui-fg)",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              style={{ borderBottom: "1px solid var(--ui-border)" }}
            >
              <td style={{ padding: "10px 12px", fontWeight: 500 }}>
                <code
                  style={{
                    backgroundColor: "var(--ui-primary-subtle)",
                    color: "var(--ui-primary)",
                    padding: "2px 6px",
                    borderRadius: "var(--ui-radius-sm)",
                    fontSize: 12,
                  }}
                >
                  {prop.name}
                  {prop.required ? (
                    <span style={{ color: "var(--ui-danger)" }}>*</span>
                  ) : null}
                </code>
              </td>
              <td style={{ padding: "10px 12px" }}>
                <code
                  style={{
                    backgroundColor: "var(--ui-bg-muted)",
                    color: "var(--ui-fg-subtle)",
                    padding: "2px 6px",
                    borderRadius: "var(--ui-radius-sm)",
                    fontSize: 12,
                  }}
                >
                  {prop.type}
                </code>
              </td>
              <td style={{ padding: "10px 12px", color: "var(--ui-fg-subtle)", fontSize: 13 }}>
                <code>{prop.default}</code>
              </td>
              <td style={{ padding: "10px 12px", color: "var(--ui-fg-subtle)" }}>
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
