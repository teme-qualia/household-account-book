import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AmountInput from '../molecules/AmountInout'
import {TextArea,Box, FormControl, Input, Select, CheckIcon} from 'native-base'



type HandleAmountChangeType = (amount: number) => void;

const handleAmountChange: HandleAmountChangeType = (amount) => {
  console.log(`New amount value: ${amount}`);
  // 金額が変更されたときの処理をここに書く
};

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
        <FormControl>
          <FormControl.Label>大分類</FormControl.Label>
          <Select minWidth="200" accessibilityLabel="大分類" placeholder="大分類" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }} mt="1">
            <Select.Item label="大分類１" value="d1" />
            <Select.Item label="大分類２" value="d2" />
            <Select.Item label="大分類３" value="d3" />
        </Select>
        </FormControl>
        <FormControl>
          <FormControl.Label>小分類</FormControl.Label>
          <Select minWidth="200" accessibilityLabel="小分類" placeholder="小分類" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />
          }} mt="1">
            <Select.Item label="小分類１" value="s1" />
            <Select.Item label="小分類２" value="s2" />
            <Select.Item label="小分類３" value="s3" />
        </Select>
        </FormControl>
        <AmountInput
          label="金額"
          value={this.state.amount}
          onChange={(value) => handleAmountChange(value)}
        />
        <FormControl>
          <FormControl.Label>日付</FormControl.Label>
          <Input variant="outline" placeholder="日付" />
        </FormControl>
        <FormControl>
          <FormControl.Label>購入者</FormControl.Label>
          <Input variant="outline" placeholder="購入者" />
        </FormControl>
        <FormControl>
          <FormControl.Label>メモ</FormControl.Label>
          <TextArea placeholder="メモ"/>
        </FormControl>
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
