#!/usr/bin/env node
import startGame from '..';
import { playRound, welcomeMessage } from '../games/even';

startGame(playRound, welcomeMessage);
