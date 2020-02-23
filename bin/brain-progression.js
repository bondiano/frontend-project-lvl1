#!/usr/bin/env node
import { run } from '../src/index.js';
import { getGameData } from '../src/games/progression.js';

run(getGameData);
