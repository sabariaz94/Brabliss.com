// // schemas/order.js

// export default {
//   name: 'order',
//   type: 'document',
//   title: 'Order',
//   fields: [
//     {
//       name: 'fullName',
//       type: 'string',
//       title: 'Full Name',
//     },
//     {
//       name: 'email',
//       type: 'string',
//       title: 'Email',
//     },
//     {
//       name: 'phone',
//       type: 'string',
//       title: 'Phone Number',
//     },
//     {
//       name: 'address',
//       type: 'string',
//       title: 'Address',
//     },
//     {
//       name: 'city',
//       type: 'string',
//       title: 'City',
//     },
//     {
//       name: 'zip',
//       type: 'string',
//       title: 'Postal Code',
//     },
//     {
//       name: 'paymentMethod',
//       type: 'string',
//       title: 'Payment Method',
//     },
//     {
//       name: 'total', // ✅ ADD THIS FIELD
//       type: 'number',
//       title: 'Total Amount',
//     },
//     {
//       name: 'items',
//       type: 'array',
//       title: 'Ordered Items',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'productId',
//               type: 'string',
//               title: 'Product ID',
//             },
//             {
//               name: 'title',
//               type: 'string',
//               title: 'Product Title',
//             },
//             {
//               name: 'price',
//               type: 'number',
//               title: 'Price',
//             },
//             {
//               name: 'quantity',
//               type: 'number',
//               title: 'Quantity',
//             },
//             {
//               name: 'imageUrl',
//               type: 'string',
//               title: 'Image URL',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'createdAt',
//       type: 'datetime',
//       title: 'Created At',
//       initialValue: () => new Date().toISOString(),
//     },
//   ],
// };


// ./schemas/order.js
const order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'zip',
      title: 'Postal Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Cash on Delivery', value: 'cod' },
          { title: 'Credit/Debit Card', value: 'card' },
          { title: 'JazzCash/EasyPaisa', value: 'jazzcash' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'total',
      title: 'Total Amount (PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'items',
      title: 'Ordered Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'productId',
              title: 'Product ID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Product Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'imageUrl',
              title: 'Image URL',
              type: 'url',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};

export default order