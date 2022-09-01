export const formatCardNumber = (cardNumber: number) => {
  const format = '#### - #### - #### - ####';
  if (!cardNumber) {
    return format
  } else {
    return cardNumber.toString()
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .padEnd(16, '#')
      .match(/.{1,4}/g)
      .join(' - ');
  }
}

export const formatExpiryDate = (str: number) => {
  const format = '####';
  if (!str) {
    return format
  } else {
    return str.toString()
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .padEnd(4, '#');
  }

}

export const formatMonth = (str: number) => {
  const format = '##';
  if (!str) {
    return format
  } else {
    return str.toString()
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .padEnd(2, '#');
  }
}

export const formatCVV = (cvv: number) => {
  const format = '###';
  if (!cvv) {
    return format
  } else {
    return cvv.toString()
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .padEnd(3, '#')
  }
}
