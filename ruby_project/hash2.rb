#要素数を数えるメソッド
{}.size

a = {'x' => 1, 'y' => 2, 'z' => 3}.size

p a

#削除メソッド。今回は要素の削除
currencies =  {'japan' => 'yen', 'us' => 'dollar'}
currencies.delete('japan')
puts currencies