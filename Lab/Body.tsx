import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

interface BodyProps {
  onUpdateHeader: (text: string) => void;
  onUpdateFooter: (text: string) => void;

}

const Body: React.FC<BodyProps> = ({ onUpdateHeader, onUpdateFooter }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [error, setError] = useState(false);
  

  const handleTextChange1 = (text: string) => {
    setText1(text);
    onUpdateHeader(text);
  };

  const handleTextChange2 = (text: string) => {
    setText2(text);
  };

  const validateInput = () => {
    if (text1 === '' || text2 === '') {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const handleButtonClick = () => {
    if (validateInput()) {
      onUpdateFooter(text2);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        onChangeText={handleTextChange1}
        value={text1}
      />


      <TextInput
        style={styles.input}
        placeholder="Nhập MSSV"
        onChangeText={handleTextChange2}
        value={text2}
      />

      <Text style={styles.errorText}>{error ? 'Vui lòng nhập đầy đủ thông tin!' : ''}</Text>

      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Click để cập nhật MSSV</Text>
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'tomato',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
    width: 300,
  },
  button: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Body;