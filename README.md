# Playlist Testing Project 🎵

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Node version](https://img.shields.io/badge/node->=14.0.0-brightgreen.svg)](https://nodejs.org/)
[![npm version](https://img.shields.io/badge/npm->=6.0.0-brightgreen.svg)](https://www.npmjs.com/)

An automated testing suite for the Playlist application using Cypress.io. This project demonstrates end-to-end testing of playlist creation functionality including track selection, multiple track addition, and playlist management.

## Features Tested ✨

- Single track selection and addition
- Multiple track selection
- Search functionality
- Track validation

## Prerequisites 📋

Before running the tests, make sure you have the following installed:

- Node.js (14.0.0 or higher)
- npm (6.0.0 or higher)

## Installation 🚀

1. Clone the repository

```bash
git clone https://github.com/NevermoreBetter/playlist
cd playlist
```

2. Install dependencies

```bash
npm install
```

## Running Tests ▶️

### Headless Mode

To run tests in headless mode (perfect for CI/CD pipelines):

```bash
npm run test
```

### Browser Mode

To run tests with Cypress Test Runner for development and debugging:

```bash
npm run test-open
```
