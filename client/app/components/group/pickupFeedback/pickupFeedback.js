import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import ngMaterial from "angular-material";
import pickupFeedbackComponent from "./pickupFeedback.component";

let pickupFeedbackModule = angular.module("pickupFeedback", [
  uiRouter,
  ngMaterial
])

.component("pickupFeedback", pickupFeedbackComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state("group.pickupFeedback", {
      url: "/pickup-feedback",
      component: "pickupFeedback",
      ncyBreadcrumb: {
        label: "{{'PICKUP_FEEDBACK.TITLE' | translate}}"
      }
    });
})

.name;

export default pickupFeedbackModule;
