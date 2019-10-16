/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RNCamera } from 'react-native-camera'

const App = () => {
  console.log('RNCamera.Constants.FaceDetection.Landmarks = ' + RNCamera.Constants.FaceDetection.Landmarks);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RNCamera
            ref={ref => { this.camera = ref; }}
            style={{ width: 400, height: 400, overflow: "hidden" }}
            type={'front'}
            flashMode={'off'}
            autoFocus={true}
            zoom={0}
            whiteBalance={'auto'}
            ratio={1}
            faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.none}
            // onFacesDetected={this.onFacesDetected.bind(this)}
            onFacesDetected={() => {}}
            // onFaceDetectionError={this.onFaceDetectionError.bind(this)}
            onFaceDetectionError={() => {}}
            focusDepth={0}
            androidCameraPermissionOptions={{
              title: '相机权限',
              message: '我们需要您授权让我们使用相机，方便人脸辨识',
              buttonPositive: '授权',
              buttonNegative: '取消',
            }}
            androidRecordAudioPermissionOptions={{
              title: '录音权限',
              message: '我们需要您授权让我们使用录音功能，方便声音辨识',
              buttonPositive: '授权',
              buttonNegative: '取消',
            }}>
          <View style={[{ width: 400, height: 400, alignItems: 'center', justifyContent: 'flex-end' }]}>
          </View>

        </RNCamera>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
