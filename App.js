import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState(null);
  const isAndroid = Platform.OS === "android";

  return (
    <View style={[styles.mainContainer]}>
      <ScrollView>
        <Text style={[styles.textsty]}>Horizontal Section</Text>

        <View style={[styles.firstContainer]}>
          <View style={[styles.firstShape]}>
            <Text style={{ color: "black" }}>1</Text>
          </View>
          <View style={[styles.firstShape]}>
            <Text style={{ color: "black" }}>2</Text>
          </View>
          <View style={[styles.firstShape]}>
            <Text style={{ color: "black" }}>3</Text>
          </View>
        </View>

        <Text style={[styles.textsty]}>Horizontal Section 2</Text>

        <View style={[styles.firstContainer]}>
          <View style={[styles.firstShape]}>
            <Text style={{ color: "black" }}>1</Text>
          </View>
          <View style={[styles.specialShape]}>
            <Text style={{ color: "black" }}>2</Text>
          </View>
          <View style={[styles.firstShape]}>
            <Text style={{ color: "black" }}>3</Text>
          </View>
        </View>

        <Text style={[styles.textsty]}>Horizontal Section</Text>

        <View style={[styles.secondContainer]}>
          <View style={[styles.secondShape]}>
            <Text style={{ color: "black" }}>1</Text>
          </View>
          <View style={[styles.secondShape, { alignSelf: "center" }]}>
            <Text style={{ color: "black" }}>2</Text>
          </View>
          <View style={[styles.secondShape, { alignSelf: "flex-end" }]}>
            <Text style={{ color: "black" }}>3</Text>
          </View>
        </View>

        <Text style={[styles.textsty]}>import text image from assets</Text>

        <View style={[styles.imageContainer]}>
          <Image
            style={styles.tinyLogo}
            source={require("./assets/favicon.png")}
          />
        </View>

        <Text style={[styles.textsty]}>basic form</Text>

        <View style={[styles.thirdContainer]}>
          <TextInput
            placeholder="placeholder"
            style={[styles.textInputstyle]}
          ></TextInput>

          <View
            style={{
              backgroundColor: "white",
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          >
            <UselessTextInput
              multiline
              numberOfLines={4}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Button
                style={{ height: 40, justifyContent: "center" }}
                title="button"
                color="lightgreen"
              />
            </View>

            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "transparent",
                  marginRight: 20,
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text style={{ alignSelf: "center", color: "lightgreen" }}>
                  button
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.fourthContainer]}>
          <View
            style={{ backgroundColor: "lightgreen", flex: 0.7, padding: 20 }}
          ></View>
        </View>

        <Text style={[styles.textsty]}>mix row and column flex</Text>

        <View
          style={{
            backgroundColor: "lightgray",
            flex: 1,
            marginTop: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#9C9C9C",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{ backgroundColor: "white", height: 44, width: 40 }}
              />
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                  style={{
                    flex: 1,
                    height: 22,
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <Text style={[styles.smalltextsty]}> user name</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#848484",
                    flex: 1,
                    height: 20,
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <Text style={[styles.smalltextsty]}> 3 mins ago</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.smalltextsty, { padding: 8 }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>

        <Text style={[styles.textsty]}>Relative position training</Text>

        <View
          style={{
            backgroundColor: "lightgray",
            flex: 1,
            height: 180,
            marginTop: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.smalltextsty]}>st</Text>
          </View>

          <View style={{ bottom: 70, right: 50, position: "absolute" }}>
            <Text style={[styles.smalltextsty]}>rb</Text>
          </View>

          <View style={{ bottom: 40, right: 90, position: "absolute" }}>
            <Text style={[styles.smalltextsty]}>cb</Text>
          </View>

          <View
            style={{
              right: "50%",
              bottom: 0,
              position: "absolute",
              marginBottom: 10,
            }}
          >
            <Text style={[styles.smalltextsty]}>gk</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
            padding: 30,
          }}
        >
          {isAndroid ? (
            <Text style={[styles.smalltextsty]}>This device is Android</Text>
          ) : (
            <Text style={[styles.smalltextsty]}>This device is Apple</Text>
          )}
        </View>

        <Text style={[styles.textsty]}>Image background + Button</Text>

        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("./assets/test.png")}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              padding: 100,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                alignItems: "center",
                padding: 10,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Join Us
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={[styles.usernameContainer]}>
            <View style={[styles.userContainer]}></View>

            <Text style={[styles.smalltextsty]}>User</Text>
          </View>

          <View style={[styles.usernameContainer]}>
            <View style={[styles.userContainer]}></View>

            <Text style={[styles.smalltextsty]}>User</Text>
          </View>

          <View style={[styles.usernameContainer]}>
            <View style={[styles.userContainer]}></View>

            <Text style={[styles.smalltextsty]}>User</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.floatingButton]}>
        <Text style={{ color: "black" }}>+</Text>
      </View>
    </View>
  );
}

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: "column",
  },

  firstContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "gray",
    height: 200,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: "gray",
    padding: 20,
    marginTop: 10,
    flexDirection: "column",
  },
  fourthContainer: {
    flex: 1,
    backgroundColor: "gray",
    padding: 6,
    marginTop: 10,
    flexDirection: "row",
  },
  firstShape: {
    backgroundColor: "gray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  secondShape: {
    backgroundColor: "lightgray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  specialShape: {
    flex: 1,
    backgroundColor: "gray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textsty: {
    paddingTop: 10,
    color: "black",
    fontSize: 22,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textInputstyle: {
    height: 40,
    padding: 10,
    backgroundColor: "white",
  },
  secondTextInputstyle: {
    marginTop: 20,
    padding: 10,
    lineHeight: 200,
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  smalltextsty: {
    paddingTop: 6,
    color: "black",
    fontSize: 12,
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usernameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
