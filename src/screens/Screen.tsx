import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import IconArrowRight from 'assets/icons/ic-arrow-right.svg';

const Screen: FC = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <IconArrowRight color="#000" />
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
