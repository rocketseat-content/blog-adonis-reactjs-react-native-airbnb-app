import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
`;

const AnnotationContainer = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FC6663;
  borderRadius: 5;
  padding: 5px;
`;

const AnnotationText = styled.Text`
  fontSize: 14px;
  color: #FFF;
`;

export { Container, AnnotationContainer, AnnotationText };