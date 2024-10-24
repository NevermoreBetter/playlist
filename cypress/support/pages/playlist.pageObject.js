import PageObject from "../PageObject";

export class Playlist extends PageObject {
 url = "/";

 get inputField() {
  return cy.get("#\\:r0\\:");
 }

 get searchResult() {
  return cy.get("p");
 }

 get checkboxButton() {
  return cy.get('[type="checkbox"]');
 }

 get addMultipleButton() {
  return cy.contains("button", "Add");
 }

 inputFieldType(text) {
  this.inputField.type(text);
 }
 assertSearchResult(text) {
  this.searchResult.should("contain", text);
 }

 selectTrackAndAdd(name) {
  cy
   .contains(".MuiTypography-root", name)
   .parents(".MuiGrid-root")
   .find("button.MuiButton-root")
   .click();
 }

 assertAddResult(text) {
  cy.contains("Your playlist").parent().contains(text).should("exist");
 }

 assertAddButtonCount(expectedCount) {
  cy
   .contains("button", `Add ${expectedCount} tracks`)
   .should("exist")
   .and("be.visible");
 }

 selectMultipleTracks(tracksToAdd) {
  tracksToAdd.forEach((track) => {
   cy
    .contains(".MuiTypography-root", track.name)
    .parents(".MuiGrid-root")
    .find('[type="checkbox"]')
    .check();
  });
  this.assertAddButtonCount(tracksToAdd.length);
 }

 addMultipleButtonClick() {
  this.addMultipleButton.click();
 }

 assertTracksInPlaylist(tracksToAdd) {
  cy
   .contains("Your playlist")
   .parent()
   .within(() => {
    tracksToAdd.forEach((track) => {
     cy.contains(track.name).should("exist");
    });
   });
 }
}
