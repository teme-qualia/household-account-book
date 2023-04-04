import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export type Expense = {
  id: string;
  category: {
    majorCategory: string;
    minorCategory: string;
  };
  amount: number;
  memo?: string;
  date: string;
  purchaser?: string;
};

type ExpenseFormProps = {
  onSubmit: (expense: Expense) => void;
};

type ExpenseFormState = {
  category: {
    majorCategory: string;
    minorCategory: string;
  };
  amount: number;
  memo?: string;
  date: string;
  purchaser?: string;
};

export default class ExpenseForm extends Component<
  ExpenseFormProps,
  ExpenseFormState
> {
  constructor(props: ExpenseFormProps) {
    super(props);
    this.state = {
      category: { majorCategory: '', minorCategory: '' },
      amount: 0,
      memo: undefined,
      date: '',
      purchaser: undefined,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>大分類</Text>
        <Text style={styles.label}>小分類</Text>
        <Text style={styles.label}>金額</Text>
        <Text style={styles.label}>メモ</Text>
        <Text style={styles.label}>日付</Text>
        <Text style={styles.label}>購入者</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export { ExpenseForm };
