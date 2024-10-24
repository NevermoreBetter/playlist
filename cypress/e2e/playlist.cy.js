/// <reference types="cypress" />

import { Playlist } from "../support/pages/playlist.pageObject";

const playlist = new Playlist();

describe("Playlist page", () => {
 const input = "Summer";
 beforeEach(() => {
  playlist.visit();
 });

 it("should test search functionality", () => {
  playlist.inputFieldType(input);
  playlist.assertSearchResult(input);
 });

 it("should test add song functionality", () => {
  playlist.selectTrackAndAdd(input);
  playlist.assertAddResult(input);
 });

 it("should test add multiple songs functionality", () => {
  const tracksToAdd = [
   { name: "Summer Breeze" },
   { name: "Autumn Leaves" },
   { name: "Rainy Mood" },
  ];

  playlist.selectMultipleTracks(tracksToAdd);
  playlist.addMultipleButtonClick();
  playlist.assertTracksInPlaylist(tracksToAdd);
 });
});
