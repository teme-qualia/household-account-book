import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AmountInput from '../molecules/AmountInout'
import {TextArea,Box, FormControl, Input, Select as NBSelect, CheckIcon} from 'native-base'
import {Select, Item} from '../atoms/Select'



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
  amount: number;
  memo?: string;
  date: string;
  purchaser?: string;
  majorCategories: Item[],
  minorCategories: Item[],
};

export default class ExpenseForm extends Component<
  ExpenseFormProps,
  ExpenseFormState
> {
  constructor(props: ExpenseFormProps) {
    super(props);
    this.state = {
      amount: 0,
      memo: undefined,
      date: '',
      purchaser: undefined,
      majorCategories: [],
      minorCategories: [],
    };
  }

  componentDidMount(){
    // 大分類を初期化
    const majorCategories= (() => {
      return [
        {label:'大分類1',value:'d1'},
        {label:'大分類2',value:'d2'},
      ]
    })()
    this.setState({ majorCategories });

    // 小分類を初期化
    const minorCategories = (()=>{
      return [
        {label:'小分類1',value:'s1'},
        {label:'小分類2',value:'s2'},
      ]
    })()
    this.setState({ minorCategories });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormControl>
          <FormControl.Label>大分類</FormControl.Label>
          <Select items={this.state.majorCategories}
            selectedValue=''
            placeholder='大分類'
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>小分類</FormControl.Label>
          <Select items={this.state.minorCategories}
          selectedValue=''
          placeholder='小分類'
          />
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
