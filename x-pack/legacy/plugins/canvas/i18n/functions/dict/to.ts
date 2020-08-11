/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n } from '@kbn/i18n';
import { to } from '../../../public/functions/to';
import { FunctionHelp } from '../function_help';
import { FunctionFactory } from '../../../types';
import { CONTEXT } from '../../constants';

export const help: FunctionHelp<FunctionFactory<typeof to>> = {
  help: i18n.translate('xpack.canvas.functions.toHelpText', {
    defaultMessage: 'Explicitly casts the type of the {CONTEXT} to the specified type.',
    values: {
      CONTEXT,
    },
  }),
  args: {
    type: i18n.translate('xpack.canvas.functions.to.args.type', {
      defaultMessage: 'A known data type in the expression language.',
    }),
  },
};

export const errors = {
  missingType: () =>
    new Error(
      i18n.translate('xpack.canvas.functions.to.missingType', {
        defaultMessage: 'Must specify a casting type',
      })
    ),
};
