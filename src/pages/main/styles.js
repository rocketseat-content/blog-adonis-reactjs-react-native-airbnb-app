import styled from 'styled-components';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const AnnotationContainer = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #fc6663;
  borderRadius: 5;
  padding: 5px;
`;

export const AnnotationText = styled.Text`
  fontSize: 14px;
  color: #fff;
`;

export const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
  alignSelf: center;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

export const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
`;

export const CancelButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #555;
  marginTop: 20px;
`;

export const SelectButtonContainer = styled.TouchableHighlight`
  alignSelf: stretch;
  borderRadius: 5px;
  paddingVertical: 20px;
  backgroundColor: #fc6663;
`;

export const ButtonText = styled.Text`
  color: #fff;
  fontSize: 16px;
  textAlign: center;
  fontWeight: bold;
`;

export const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  alignSelf: center;
  top: ${(Dimensions.get('window').height / 2) - 60};
`;

export const ModalContainer = styled.View`
  flex: 1;
  backgroundColor: #FFF;
`;

export const ModalImagesListContainer = styled.View``;

export const ModalImagesList = styled.ScrollView`
  paddingHorizontal: 20px;
  paddingTop: 20px;
`;

export const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  marginRight: 10px;
`;

export const ModalButtons = styled.View`
  paddingHorizontal: 10px;
  paddingVertical: 5px;
  flexDirection: row;
  justifyContent: space-between;
`;

export const CameraButtonContainer = styled.TouchableHighlight`
  paddingVertical: 20px;
  paddingHorizontal: 40px;
`;

export const CancelButtonText = styled.Text`
  color: #333;
  fontSize: 18px;
  fontWeight: bold;
`;

export const ContinueButtonText = styled.Text`
  color: #fc6663;
  fontSize: 18px;
  fontWeight: bold;
`;

export const TakePictureButtonContainer = styled.TouchableHighlight`
  position: absolute;
  alignSelf: center;
  bottom: 20;
  width: 60px;
  height: 60px;
  backgroundColor: #FFF;
  borderRadius: 30px;
  alignItems: center;
  justifyContent: center;
`;

export const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  borderRadius: 26px;
  backgroundColor: #fc6663;
`;

export const DataButtonsWrapper = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  paddingHorizontal: 20px;
`;

export const MarkerContainer = styled.View`
  width: 30px;
  height: 30px;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFF;
  borderRadius: 15px;
`;

export const MarkerLabel = styled.View`
  width: 24px;
  height: 24px;
  borderRadius: 12px;
  backgroundColor: #7159C1;
`;

export const Form = styled.View`
  flex: 1;
  marginTop: 20px;
`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 10px;
  marginHorizontal: 20px;
  fontSize: 14px;
  borderWidth: 1px;
  borderColor: #CCC;
`;

export const DetailsModalFirstDivision = styled.View`
  flex: 3;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalSecondDivision = styled.View`
  flex: 4;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalThirdDivision = styled.View`
  flex: 3;
  alignItems: center;
  justifyContent: center;
`;

export const DetailsModalBackButton = styled.Text`
  color: #fc6663;
  fontSize: 18px;
  fontWeight: bold;
`;

export const DetailsModalRealtyTitle = styled.Text`
  fontSize: 28px;
  fontWeight: bold;
  textAlign: center;
  marginBottom: 15px;
  marginHorizontal: 40px;
`;

export const DetailsModalRealtySubTitle = styled.Text`
  fontSize: 22px;
  textAlign: center;
  marginBottom: 15px;
  marginHorizontal: 40px;
`;

export const DetailsModalRealtyAddress = styled.Text`
  fontSize: 18px;
  color: #999;
  textAlign: center;
  marginHorizontal: 60px;
`;

export const DetailsModalPrice = styled.Text`
  color: #fc6663;
  fontSize: 28px;
  fontWeight: bold;
`;