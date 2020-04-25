import React from "react";
import { View, Text } from "react-native";

// Function Component
function RebelAlliance() {
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Aliança Rebelde</Text>
      <Text>Princess Leia Organa</Text>
      <Text>Luke Skywalker</Text>
      <Text>Han Solo</Text>
    </View>
  );
}

// Function Component
function GalactcEmpire() {
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Império Galático</Text>
      <Text>Darth Vader</Text>
      <Text>Palpatine</Text>
    </View>
  );
}

// Function Component
function JediOrder() {
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Ordem Jedi</Text>
      <Text>Yoda</Text>
      <Text>Qui-Gon Jinn</Text>
      <Text>Obi-Wan Kenobi</Text>
    </View>
  );
}

// Function Component principal
export default function App() {
  return (
    <View>
      <RebelAlliance />
      <GalactcEmpire />
      <JediOrder />
    </View>
  );
}