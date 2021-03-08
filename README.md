# Chainlink External Adapter for ERCGas.org

### Environment Variables

| Required? |  Name   | Description | Options | Defaults to |
| :-------: | :-----: | :---------: | :-----: | :---------: |
|    ✅     | API_KEY |             |         |             |

---

### Input Parameters

| Required? |   Name   |     Description     |            Options             | Defaults to |
| :-------: | :------: | :-----------------: | :----------------------------: | :---------: |
|           | endpoint | The endpoint to use | [gasprice](#gasprice-Endpoint) | `gasprice`  |

---

## Gas Price Endpoint

### Input Params

| Required? |    Name    |               Description                |               Options                |    Defaults to     |
| :-------: | :--------: | :--------------------------------------: | :----------------------------------: | :----------------: |
|    🟡     |  `speed`   |            The desired speed             | `safeLow`,`average`,`fast`,`fastest` |     `average`      |
|    🟡     | `endpoint` | The blockchain id to get gas prices from |                                      | `ethereum-mainnet` |

### Output Format

```json
{
  "number_of_blocks": 200,
  "latest_block_number": 11995371,
  "percentile_1": "0.000011001 gwei",
  "percentile_2": "1 gwei",
  "percentile_3": "10 gwei",
  "percentile_4": "10 gwei",
  "percentile_5": "10 gwei",
  "percentile_10": "110 gwei",
  "percentile_15": "112.000000364 gwei",
  "percentile_20": "114 gwei",
  "percentile_25": "115 gwei",
  "percentile_30": "115.000001459 gwei",
  "percentile_35": "115.000001459 gwei",
  "percentile_40": "115.000001459 gwei",
  "percentile_45": "116 gwei",
  "percentile_50": "117 gwei",
  "percentile_55": "119 gwei",
  "percentile_60": "120 gwei",
  "percentile_65": "122 gwei",
  "percentile_70": "122.000001235 gwei",
  "percentile_75": "123 gwei",
  "percentile_80": "126 gwei",
  "percentile_85": "127 gwei",
  "percentile_90": "130 gwei",
  "percentile_95": "133.000001459 gwei",
  "percentile_96": "134 gwei",
  "percentile_97": "134.000001459 gwei",
  "percentile_98": "136.275001728 gwei",
  "percentile_99": "138 gwei",
  "percentile_100": "146 gwei"
}
```
