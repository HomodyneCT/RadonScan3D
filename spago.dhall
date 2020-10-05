{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "my-project"
, dependencies =
  [ "console"
  , "effect"
  , "interpolate"
  , "psci-support"
  , "react-basic"
  , "react-basic-dom"
  , "react-basic-hooks"
  , "react-basic-native"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
