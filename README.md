# Task Manager

A full-featured task management app built with React. Add, complete, and delete tasks — everything persists across page refreshes.

**Live demo:** https://task-manager-fawn-kappa.vercel.app

## What it does

- Add new tasks
- Mark tasks as complete (with strikethrough)
- Delete tasks
- Tasks persist after refresh using localStorage
- Empty state message when no tasks exist
- Handles edge cases (empty/whitespace-only input)

## What I used

- React (components, props, useState, useEffect)
- Tailwind CSS
- localStorage for persistence
- Deployed on Vercel

## What I learned

- Lifting state up to a common parent so sibling components can share data
- Passing functions down as props to let child components update parent state
- Using two separate useEffect hooks — one to load saved data on mount, one to save on every change
- Debugging a real timing bug where the save effect ran before the load effect finished, overwriting saved data
- Styling a React app with Tailwind CSS
- Deploying a Vite + React app to Vercel

## How to run it locally

1. Clone the repo:
   ```bash
   git clone https://github.com/17adarshdash-commits/task-manager.git
   cd task-manager
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```