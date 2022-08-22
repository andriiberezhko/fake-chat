import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62ff928a9350a1e548e1c75f.mockapi.io",
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["contacts"],
    }),
    getContactById: builder.query({
      query: (id) => {
        return `/contacts/${id}`;
      },
      providesTags: ["contacts"],
    }),
    getMessages: builder.query({
      query: (id) => {
        return `/contacts/${id}/message`;
      },
      providesTags: ["contacts"],
    }),

    addMessage: builder.mutation({
      query: ({ id, message }) => ({
        url: `/contacts/${id}/message`,
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useGetMessagesQuery,
  useAddMessageMutation,
} = contactsApi;
