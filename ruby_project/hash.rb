currencies =  {'japan' => 'yen', 'us' => 'dollar'}
currencies.each do |key_value|
  key = key_value[0]
  value = key_value[1]
  puts "#{key} : #{value}"
end