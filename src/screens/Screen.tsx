import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {StyleSheet, View, Text} from 'react-native';

const Screen: FC = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('SCREEN')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen;
