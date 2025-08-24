'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMagazineAction } from '../../action/magazine/createMagazineAction';
import { deleteMagazineAction } from '../../action/magazine/deleteMagazineAction';

export function useMagazineMutations() {
  const qc = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (formData: FormData) => createMagazineAction(formData),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['magazines', 'all'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteMagazineAction(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['magazines', 'all'] });
    },
  });

  return { createMutation, deleteMutation };
}
