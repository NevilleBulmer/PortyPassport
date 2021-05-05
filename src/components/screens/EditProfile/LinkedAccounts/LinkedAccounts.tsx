import * as React from 'react';
import {Section, Icon, Divider} from '@src/components/elements';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import {Switch} from 'react-native';

type LinkedAccountsProps = {};

const LinkedAccounts: React.FC<LinkedAccountsProps> = () => {
  const [isGoogleAccountLinked, setIsGoogleAccountLinked] = React.useState(
    false,
  );
  const [isFacebookAccountLinked, setIsFacebookAccountLinked] = React.useState(
    true,
  );
  const [isAppleAccountLinked, setIsAppleAccountLinked] = React.useState(false);

  return (
    <Section title="Linked Accounts">
      <Divider />
      <ListRowItem
        title="Facebook"
        leftIcon={<Icon name="facebook" size={18} />}
        rightIcon={
          <Switch
            value={isFacebookAccountLinked}
            onValueChange={(value) => setIsFacebookAccountLinked(value)}
          />
        }
      />
      <Divider />
    </Section>
  );
};

export default LinkedAccounts;
