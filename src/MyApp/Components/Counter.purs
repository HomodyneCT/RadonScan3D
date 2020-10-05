module MyApp.Components.Counter where

import Prelude

import Data.Interpolate (i)
import Data.Tuple.Nested ((/\))
import React.Basic.DOM (button, div_, text)
import React.Basic.Events (handler_)
import React.Basic.Hooks (Component, JSX, component, useState')
import React.Basic.Hooks as Hooks
import React.Basic.Native (text_)

type Props = { label :: String }

mkCounter :: Component Props
mkCounter = component "Counter" \props -> Hooks.do
  count /\ setCount <- useState' 0

  pure do
    div_
      [ text_ [ text $ i "You clicked " count " times" ]
      , button
          { onClick: handler_ $ setCount (count + 1)
          , children: [ text_ [text $ props.label] ]
          }
      ]
