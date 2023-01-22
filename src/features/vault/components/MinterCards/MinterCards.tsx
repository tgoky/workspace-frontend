import * as React from 'react';
import { memo, PropsWithChildren, useEffect } from 'react';
import { VaultEntity } from '../../../data/entities/vault';
import { selectMintersByVaultId, selectShouldInitMinters } from '../../../data/selectors/minters';
import { fetchAllMinters } from '../../../data/actions/minters';
import { MinterCard } from './MinterCard';
import { useAppDispatch, useAppSelector } from '../../../../store';

export type MinterCardsParams = PropsWithChildren<{
  vaultId: VaultEntity['id'];
}>;

export const MinterCards = memo<MinterCardsParams>(function MinterCards({ vaultId }) {
  const dispatch = useAppDispatch();
  const shouldInitMinters = useAppSelector(selectShouldInitMinters);
  const minterCardIds = useAppSelector(state => selectMintersByVaultId(state, vaultId));

  useEffect(() => {
    if (shouldInitMinters) {
      dispatch(fetchAllMinters());
    }
  }, [dispatch, shouldInitMinters]);

  return (
    <>
      {minterCardIds.map(minterId => (
        <div key={minterId}>
          <MinterCard vaultId={vaultId} minterId={minterId} />
        </div>
      ))}
    </>
  );
});
