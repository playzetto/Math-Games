#!/usr/bin/env node
import startGame from '..';
import { playRound, welcomeMessage } from '../games/calc';

startGame(playRound, welcomeMessage);
