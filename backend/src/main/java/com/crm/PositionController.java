package com.crm;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;
import java.util.Map;

@RestController
public class PositionController {
    @GetMapping("/api/positions")
    public List<Map<String, Object>> getPositions() {
        return Arrays.asList(
            Map.of(
                "code", "GCEO",
                "title", "Group Chief Executive Officer",
                "desc", "Strategic Leadership..",
                "units", "BG1",
                "defaultUnit", "BG1",
                "reportsTo", "-",
                "person", "Shyma Lal",
                "active", true
            ),
            Map.of(
                "code", "CEO",
                "title", "Chief Executive Officer",
                "desc", "-",
                "units", "TML",
                "defaultUnit", "TML",
                "reportsTo", "GCEO",
                "person", "Ram Lal",
                "active", true
            )
            // Add more positions as needed
        );
    }
}
