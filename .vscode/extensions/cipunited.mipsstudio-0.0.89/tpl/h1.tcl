# ====================================================================================
echo "    reb                         (Setup for an EJTAGBOOT indicated reset.)"
# ====================================================================================
proc reb {} {
    jtag_reset 0 1;irscan cipuH1.cpu 5;jtag_reset 0 0;irscan cipuH1.cpu 0x0c;
}

# ====================================================================================
echo "    rnb                         (Setup for a NORMALBOOT indicated reset.)"
# ====================================================================================
proc rnb {} {
    jtag_reset 0 1;	irscan cipuH1.cpu 5;jtag_reset 0 0;irscan cipuH1.cpu 0x0d;
}
