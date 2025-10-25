# shiny-zebra

## Active branches

- `feature/study-config-workspace`: hosts the study configuration workspace UI that guides researchers through the setup flow. Use this branch if you want to review or iterate on the guided study composer experience separately from the `work` branch.

## Getting started locally

Clone the repository and install dependencies inside the `app` workspace:

```bash
cd app
pnpm install
```

To run the development server for either branch:

```bash
pnpm dev
```

The UI lives at `src/app/page.tsx` in both branches.
