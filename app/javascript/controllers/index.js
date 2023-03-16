// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AddressAutocompleteController from "./address_autocomplete_controller"
application.register("address-autocomplete", AddressAutocompleteController)

import ChatSubscriptionController from "./chat_subscription_controller"
application.register("chat-subscription", ChatSubscriptionController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import NavScrollIntoViewController from "./nav_scroll_into_view_controller"
application.register("nav-scroll-into-view", NavScrollIntoViewController)

import StarsController from "./stars_controller"
application.register("stars", StarsController)
