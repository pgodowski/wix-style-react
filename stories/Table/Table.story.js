import React from 'react';
import s from './Table.story.scss';
import {storySettings} from './storySettings';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {Star, Download, Duplicate, Print} from 'wix-style-react/new-icons';

import {Table} from '../../src/Table/Table';

import {TableExample} from './TableExample';
import TableExampleRaw from '!raw-loader!./TableExample';

import {TablePageExample} from './TablePageExample';
import TablePageExampleRaw from '!raw-loader!./TablePageExample';

import {TableActionColumnPrimaryExample} from './TableActionColumnPrimaryExample';
import TableActionColumnPrimaryExampleRaw from '!raw-loader!./TableActionColumnPrimaryExample';

import {TableActionColumnPrimarySecondaryExample} from './TableActionColumnPrimarySecondaryExample';
import TableActionColumnPrimarySecondaryExampleRaw from '!raw-loader!./TableActionColumnPrimarySecondaryExample';

import {TableEmptyStateExample} from './TableEmptyStateExample';
import TableEmptyStateExampleRaw from '!raw-loader!./TableEmptyStateExample';

const data = [
  {firstName: 'Meghan', lastName: 'Bishop'},
  {firstName: 'Sara', lastName: 'Porter'},
  {firstName: 'Deborah', lastName: 'Rhodes'},
  {firstName: 'Walter', lastName: 'Jenning'}
];

const dataLong = [1, 2, 3, 4, 5].reduce(accum => accum.concat(data), []);

const columnsOption1 = [
  {title: 'First', width: '30%', render: row => row.firstName},
  {title: 'Last', width: '30%', render: row => row.lastName}
];

const columnsOption2 = [
  {title: 'Row Num', render: (row, rowNum) => rowNum},
  {title: 'First', render: row => row.firstName},
  {title: 'Last', render: row => row.lastName},
  {title: 'Full', render: row => row.firstName + row.lastName}
];

const primaryActionOptions1 = {
  name: 'Details',
  theme: 'fullblue',
  onActionTrigger: rowData => console.log(`Details for ${rowData.firstName} + ${rowData.lastName}`)
};

const primaryActionOptions2 = {
  ...primaryActionOptions1,
  theme: 'whiteblue'
};

const secondaryActionsOption = [
  {name: 'Star', icon: <Star/>, onActionTrigger: rowData => console.log(`Starring ${rowData.firstName} + ${rowData.lastName}`)},
  {name: 'Download', icon: <Download/>, onActionTrigger: rowData => console.log(`Downloading ${rowData.firstName} + ${rowData.lastName}`)},
  {name: 'Duplicate', icon: <Duplicate/>, onActionTrigger: rowData => console.log(`Duplicating ${rowData.firstName} + ${rowData.lastName}`)},
  {name: 'Print', icon: <Print/>, onActionTrigger: rowData => console.log(`Printing ${rowData.firstName} + ${rowData.lastName}`)}
];

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: Table,
  componentPath: '../../src/Table/Table.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    id: 'id',
    data,
    columns: columnsOption1,
    showSelection: true,
    primaryRowAction: primaryActionOptions1,
    secondaryRowActions: [],
    visibleSecondaryActions: 0,
    alwaysShowSecondaryActions: false
  },
  exampleProps: {
    columns: [
      {label: '2 columns example', value: columnsOption1},
      {label: '4 columns example', value: columnsOption2}
    ],
    data: [
      {label: '4 rows', value: data},
      {label: '40 rows', value: dataLong}
    ],
    primaryRowAction: [
      {label: 'No primary action', value: null},
      {label: 'Blue primary action', value: primaryActionOptions1},
      {label: 'White primary action', value: primaryActionOptions2}
    ],
    secondaryRowActions: [
      {label: 'No secondary actions', value: null},
      {label: '4 secondary actions', value: secondaryActionsOption}
    ]
  },
  codeExample: false,
  examples: (
    <div>
      <div className={s.examples}>
        <div className={s.example}>
          <CodeExample title="Typical (With Toolbar)" code={TableExampleRaw}>
            <TableExample/>
          </CodeExample>
        </div>
        <div className={s.example}>
          <CodeExample title="Table in a Page (Fixed Header)" code={TablePageExampleRaw}>
            <TablePageExample/>
          </CodeExample>
        </div>
        <div className={s.example}>
          <CodeExample title="Table with Action Column (Primary Action Only)" code={TableActionColumnPrimaryExampleRaw}>
            <TableActionColumnPrimaryExample/>
          </CodeExample>
        </div>
        <div className={s.example}>
          <CodeExample title="Table with Action Column (Primary and Secondary Actions)" code={TableActionColumnPrimarySecondaryExampleRaw}>
            <TableActionColumnPrimarySecondaryExample/>
          </CodeExample>
        </div>
        <div className={s.example}>
          <CodeExample title="Table with EmptyState" code={TableEmptyStateExampleRaw}>
            <TableEmptyStateExample/>
          </CodeExample>
        </div>
      </div>
    </div>
  )
};
