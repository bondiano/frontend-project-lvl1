#!/usr/bin/env node
import { run } from '../src/index.js';
import { getGameData } from '../src/games/calc.js';

run(getGameData);