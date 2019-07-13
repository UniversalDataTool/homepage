// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Hero from "./"

storiesOf("Hero", module).add("Basic", () => <Hero />)
