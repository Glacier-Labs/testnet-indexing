import {
  Address,
} from '@graphprotocol/graph-ts';

import { NodeActivateEvent, NodeReportVerificationEvent, TeeReportAttestationsEvent, ConfirmVrfNodesEvent } from '../../generated/schema';
import { NodeActivate, NodeReportVerification, TeeReportAttestations, ConfirmVrfNodes } from '../../generated/NodeCtrlTestnet/NodeCtrl'

export function handleNodeActivate(event: NodeActivate): void {
  let nodeActivateEvent = new NodeActivateEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );

  nodeActivateEvent.node = Address.fromBytes(event.params.node);
  nodeActivateEvent.listIndex = event.params.listIndex;
  nodeActivateEvent.txhash = event.transaction.hash;
  nodeActivateEvent.save();
}

export function handleNodeReportVerification(event: NodeReportVerification): void {
  let nodeReportVerificationEvent = new NodeReportVerificationEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );

  nodeReportVerificationEvent.node = Address.fromBytes(event.params.node);
  nodeReportVerificationEvent.attestationID = event.params.attestationID;
  nodeReportVerificationEvent.result = event.params.result;
  nodeReportVerificationEvent.txhash = event.transaction.hash;
  nodeReportVerificationEvent.save();
}

export function handleTeeReportAttestations(event: TeeReportAttestations): void {
  let teeReportAttestationsEvent = new TeeReportAttestationsEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );

  teeReportAttestationsEvent.tee = Address.fromBytes(event.params.tee);
  teeReportAttestationsEvent.txhash = event.transaction.hash;
  teeReportAttestationsEvent.attestationIDs = event.params.attestationIDs;
  teeReportAttestationsEvent.requestID = event.params.requestID;
  teeReportAttestationsEvent.attestationInfos = event.params.attestationInfos;
  teeReportAttestationsEvent.save();
}

export function handleConfirmVrfNodes(event: ConfirmVrfNodes): void {
  let confirmVrfNodesEvent = new ConfirmVrfNodesEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );

  confirmVrfNodesEvent.requestId = event.params.requestId;
  confirmVrfNodesEvent.vrfChosen = event.params.vrfChosen;
  confirmVrfNodesEvent.deadline = event.params.deadline;
  confirmVrfNodesEvent.txhash = event.transaction.hash;
  confirmVrfNodesEvent.timestamp = event.block.timestamp;
  confirmVrfNodesEvent.save();
}