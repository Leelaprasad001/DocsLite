'use client';

import Loader from '@/components/Loader';
import { getClerkUsers, getDocumentUsers } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';
import Header from '@/components/Header';
import Main from '@/components/Main';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  const { user: clerkUser } = useUser();

  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const email = clerkUser?.emailAddresses?.[0]?.emailAddress;
        if (!email) {
          throw new Error('User email is not available');
        }

        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: email,
          text,
        });

        return roomUsers;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {clerkUser ? (
          <>{children}</>
        ) : (
          <Main>{children}</Main>
        )}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
