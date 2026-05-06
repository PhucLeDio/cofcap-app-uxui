## Figma MCP setup

Files added:

- `cline_mcp_settings.json`: MCP server config entry named `figma`.
- `.env.example`: example to set `FIGMA_ACCESS_TOKEN` (do not commit real token).

Start server (PowerShell):

```powershell
$env:FIGMA_ACCESS_TOKEN = "<your_token>"
npx -y @modelcontextprotocol/server-figma
```

Start server (bash / WSL / macOS):

```bash
export FIGMA_ACCESS_TOKEN="<your_token>"
npx -y @modelcontextprotocol/server-figma
```

To integrate with tools that read `cline_mcp_settings.json`, ensure the environment variable
`FIGMA_ACCESS_TOKEN` is set in the environment used to launch the MCP server.
