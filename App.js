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
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RNCamera } from 'react-native-camera'
var window = Dimensions.get('window');
export var screen_w = window.width; //屏幕宽度
export var screen_h = window.height; //屏幕宽度

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RNCamera
            ref={ref => { this.camera = ref; }}
            style={{ width: screen_w, height: screen_h, overflow: "hidden" }}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.auto}
            captureAudio={false}
            autoFocus={true}
            zoom={0}
            focusDepth={0.5}
            autoFocusPointOfInterest={{x: 0.5, y: 0.5}}
            // type={'front'}
            // flashMode={'off'}
            // autoFocus={true}
            // zoom={0}
            // whiteBalance={'auto'}
            // ratio={1}
            // faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.none}
            // // onFacesDetected={this.onFacesDetected.bind(this)}
            // onFacesDetected={() => {}}
            // // onFaceDetectionError={this.onFaceDetectionError.bind(this)}
            // onFaceDetectionError={() => {}}
            // focusDepth={0}
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
          <TouchableOpacity style={[{ position: 'absolute',left: 50,bottom: 50, width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'flex-end' }]}
          onPress={() => {
            if (this.camera) {
              let options = {
                quality: 1.0,
                width: 1080,
                pauseAfterCapture: true,
                forceUpOrientation: true,
                fixOrientation: true,
                mirrorImage: true
              };

              this.camera.takePictureAsync(options).then((data) => {
                console.log('data.uri = ' + data.uri);
              });
            }
          }}>
            <Text>点我拍照</Text>
          </TouchableOpacity>

        </RNCamera>

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
